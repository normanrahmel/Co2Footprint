import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CO2Data {
  country: string;
  company: string;
  emissions: number;
}

const CO2_DATAS: CO2Data[] = [
  { country: 'Deutschland', company: 'Volkswagen', emissions: 1000 },
  { country: 'Deutschland', company: 'BMW', emissions: 950 },
  { country: 'USA', company: 'ExxonMobil', emissions: 500 },
  { country: 'USA', company: 'Ford', emissions: 900 },
  { country: 'USA', company: 'Apple', emissions: 1900 },
  { country: 'China', company: 'Sinopec Group', emissions: 750 },
  { country: 'Indien', company: 'Reliance Industries', emissions: 300 },
  { country: 'Russland', company: 'Gazprom', emissions: 400 },
  { country: 'Japan', company: 'Mitsubishi', emissions: 200 },
  { country: 'Brasilien', company: 'Petrobras', emissions: 100 },
  { country: 'Kanada', company: 'Suncor Energy', emissions: 50 },
  { country: 'Saudi-Arabien', company: 'Saudi Aramco', emissions: 25 },
  { country: 'Mexiko', company: 'Pemex', emissions: 10 },
  { country: 'Spanien', company: 'Repsol', emissions: 450 },
  { country: 'Norwegen', company: 'Equinor', emissions: 150 },
  { country: 'Niederlande', company: 'Shell', emissions: 800 },
  { country: 'Schweiz', company: 'Gaznat', emissions: 50 },
  { country: 'Indonesien', company: 'PT Pertamina', emissions: 275 },
  { country: 'Südafrika', company: 'Sasol', emissions: 200 },
  { country: 'Katar', company: 'Qatar Petroleum', emissions: 50 },
  { country: 'Australien', company: 'BHP', emissions: 120 },
  { country: 'Iran', company: 'National Iranian Oil Co.', emissions: 180 },
  { country: 'Vereinigte Arabische Emirate', company: 'ADNOC', emissions: 85 },
  { country: 'Frankreich', company: 'Total', emissions: 300 },
  { country: 'Kuwait', company: 'Kuwait Petroleum', emissions: 75 },
  { country: 'Vereinigtes Königreich', company: 'BP', emissions: 550 },
  { country: 'Kasachstan', company: 'KazMunayGas', emissions: 80 },
  { country: 'Thailand', company: 'PTT Public Company', emissions: 125 },
  { country: 'Nigeria', company: 'NNPC', emissions: 150 },
  { country: 'Vietnam', company: 'PetroVietnam', emissions: 90 },
  { country: 'Algerien', company: 'Sonatrach', emissions: 70 },
  { country: 'Irak', company: 'Iraq National Oil Co.', emissions: 120 },
  { country: 'Libyen', company: 'NOC', emissions: 100 },
];

@Component({
  selector: 'app-co2-table',
  templateUrl: './co2-table.component.html',
  styleUrls: ['./co2-table.component.scss'],
})
export class Co2TableComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['country', 'company', 'co2Emission'];
  sort: MatSort = new MatSort();

  constructor() {
    this.dataSource = new MatTableDataSource(CO2_DATAS);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'co2Emission':
          return item.emissions;
        default:
          return item[property];
      }
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.sort?.sort({
      id: 'co2Emission',
      start: 'asc',
      disableClear: true,
    });
  }

  sortData(event: Event) {
    const isAsc = this.sort.direction === 'asc';
    const column = event.target['data-column'];
    this.dataSource.data = this.dataSource.data.sort((a, b) => {
      switch (column) {
        case 'co2Emission':
          return this.compare(a.emissions, b.emissions, isAsc);
        case 'country':
          return this.compare(a.country, b.country, isAsc);
        case 'company':
          return this.compare(a.company, b.company, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource.filter = this.dataSource.filter;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  sortDataByRow(column: string) {
    const isAsc = this.sort.direction === 'asc';
    switch (column) {
      case 'country':
        this.dataSource.data = this.dataSource.data.sort((a, b) =>
          this.compare(a.country, b.country, isAsc)
        );
        break;
      case 'company':
        this.dataSource.data = this.dataSource.data.sort((a, b) =>
          this.compare(a.company, b.company, isAsc)
        );
        break;
      default:
        return;
    }
  }
}

/*import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CO2Data {
  country: string;
  company: string;
  emissions: number;
}

const CO2_DATAS: CO2Data[] = [
  { country: 'Deutschland', company: 'Volkswagen', emissions: 1000 },
  { country: 'USA', company: 'ExxonMobil', emissions: 500 },
  { country: 'China', company: 'Sinopec Group', emissions: 750 },
  { country: 'Indien', company: 'Reliance Industries', emissions: 300 },
  { country: 'Russland', company: 'Gazprom', emissions: 400 },
  { country: 'Japan', company: 'Mitsubishi', emissions: 200 },
  { country: 'Brasilien', company: 'Petrobras', emissions: 100 },
  { country: 'Kanada', company: 'Suncor Energy', emissions: 50 },
  { country: 'Saudi-Arabien', company: 'Saudi Aramco', emissions: 25 },
  { country: 'Mexiko', company: 'Pemex', emissions: 10 },
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
  }

  applyFilter(event: Event) {
    console.log('applyFilter called');
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
*/
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CO2Data {
  country: string;
  company: string;
  emissions: number;
}

const CO2_DATAS: CO2Data[] = [
  { country: 'Deutschland', company: 'Volkswagen', emissions: 1000 },
  { country: 'USA', company: 'ExxonMobil', emissions: 500 },
  { country: 'China', company: 'Sinopec Group', emissions: 750 },
  { country: 'Indien', company: 'Reliance Industries', emissions: 300 },
  { country: 'Russland', company: 'Gazprom', emissions: 400 },
  { country: 'Japan', company: 'Mitsubishi', emissions: 200 },
  { country: 'Brasilien', company: 'Petrobras', emissions: 100 },
  { country: 'Kanada', company: 'Suncor Energy', emissions: 50 },
  { country: 'Saudi-Arabien', company: 'Saudi Aramco', emissions: 25 },
  { country: 'Mexiko', company: 'Pemex', emissions: 10 },
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
          return compare(a.emissions, b.emissions, isAsc);
        case 'country':
          return compare(a.country, b.country, isAsc);
        case 'company':
          return compare(a.company, b.company, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource.filter = this.dataSource.filter;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CO2Data {
  country: string;
  company: string;
  emissions: number;
}

const CO2_DATAS_DE: CO2Data[] = [
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
  { country: 'Italien', company: 'ENI', emissions: 250 },
  { country: 'Argentinien', company: 'YPF', emissions: 50 },
  { country: 'Kolumbien', company: 'ECOPETROL', emissions: 50 },
  { country: 'Südkorea', company: 'Korea National Oil Corp.', emissions: 150 },
  { country: 'Polen', company: 'PKN Orlen', emissions: 100 },
  { country: 'Ukraine', company: 'Naftogaz', emissions: 50 },
  { country: 'Türkei', company: 'Turkmenistan', emissions: 50 },
  { country: 'Österreich', company: 'OMV', emissions: 50 },
  { country: 'Belgien', company: 'Total', emissions: 50 },
  { country: 'Tschechien', company: 'CEZ', emissions: 50 },
];
const CO2_DATAS_EN: CO2Data[] = [
  { country: 'Germany', company: 'Volkswagen', emissions: 1000 },
  { country: 'Germany', company: 'BMW', emissions: 950 },
  { country: 'USA', company: 'ExxonMobil', emissions: 500 },
  { country: 'USA', company: 'Ford', emissions: 900 },
  { country: 'USA', company: 'Apple', emissions: 1900 },
  { country: 'China', company: 'Sinopec Group', emissions: 750 },
  { country: 'India', company: 'Reliance Industries', emissions: 300 },
  { country: 'Russia', company: 'Gazprom', emissions: 400 },
  { country: 'Japan', company: 'Mitsubishi', emissions: 200 },
  { country: 'Brazil', company: 'Petrobras', emissions: 100 },
  { country: 'Canada', company: 'Suncor Energy', emissions: 50 },
  { country: 'Saudi Arabia', company: 'Saudi Aramco', emissions: 25 },
  { country: 'Mexico', company: 'Pemex', emissions: 10 },
  { country: 'Spain', company: 'Repsol', emissions: 450 },
  { country: 'Norway', company: 'Equinor', emissions: 150 },
  { country: 'Netherlands', company: 'Shell', emissions: 800 },
  { country: 'Switzerland', company: 'Gaznat', emissions: 50 },
  { country: 'Indonesia', company: 'PT Pertamina', emissions: 275 },
  { country: 'South Africa', company: 'Sasol', emissions: 200 },
  { country: 'Qatar', company: 'Qatar Petroleum', emissions: 50 },
  { country: 'Australia', company: 'BHP', emissions: 120 },
  { country: 'Iran', company: 'National Iranian Oil Co.', emissions: 180 },
  { country: 'United Arab Emirates', company: 'ADNOC', emissions: 85 },
  { country: 'France', company: 'Total', emissions: 300 },
  { country: 'Kuwait', company: 'Kuwait Petroleum', emissions: 75 },
  { country: 'United Kingdom', company: 'BP', emissions: 550 },
  { country: 'Kazakhstan', company: 'KazMunayGas', emissions: 80 },
  { country: 'Thailand', company: 'PTT Public Company', emissions: 125 },
  { country: 'Nigeria', company: 'NNPC', emissions: 150 },
  { country: 'Vietnam', company: 'PetroVietnam', emissions: 90 },
  { country: 'Algeria', company: 'Sonatrach', emissions: 70 },
  { country: 'Iraq', company: 'Iraq National Oil Co.', emissions: 120 },
  { country: 'Libya', company: 'NOC', emissions: 100 },
  { country: 'Italy', company: 'ENI', emissions: 200 },
  { country: 'Turkey', company: 'Turkmenistan', emissions: 150 },
  { country: 'Ukraine', company: 'Ukrnafta', emissions: 100 },
  { country: 'Poland', company: 'PKN Orlen', emissions: 50 },
  { country: 'Romania', company: 'Rompetrol', emissions: 50 },
  { country: 'Argentina', company: 'YPF', emissions: 50 },
  { country: 'Colombia', company: 'Ecopetrol', emissions: 50 },
  { country: 'Peru', company: 'Perenco', emissions: 50 },
  { country: 'Chile', company: 'Enap', emissions: 50 },
  { country: 'Ecuador', company: 'Petroamazonas', emissions: 50 },
  { country: 'Venezuela', company: 'PDVSA', emissions: 50 },
  {
    country: 'Bolivia',
    company: 'Yacimientos Petroliferos Fiscales Bolivianos',
    emissions: 50,
  },
  { country: 'Estonia', company: 'Eesti Energia', emissions: 50 },
  { country: 'Finland', company: 'Neste', emissions: 50 },
  { country: 'Sweden', company: 'Statoil', emissions: 50 },
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

  activeSortColumn: string;
  activeSortDirection: 'asc' | 'desc';

  constructor() {
    if (navigator.language === 'de-DE') {
      this.dataSource = new MatTableDataSource(CO2_DATAS_DE);
    } else {
      this.dataSource = new MatTableDataSource(CO2_DATAS_EN);
    }
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

  // Wird beim Klicken auf eine Tabellenspalte aufgerufen wird, um die Spalte zu sortieren
  sortColumn(column: string) {
    // Wenn die aktive Sortierspalte mit der geklickten Spalte übereinstimmt
    if (this.activeSortColumn === column) {
      // Ändere die Sortierrichtung, entweder von 'asc' nach 'desc' oder umgekehrt
      this.activeSortDirection =
        this.activeSortDirection === 'asc' ? 'desc' : 'asc';

      // Andernfalls (wenn eine andere Spalte angeklickt wurde)
    } else {
      // Aktualisiere die aktive Sortierspalte auf die geklickte Spalte
      this.activeSortColumn = column;
      // und setze die Sortierrichtung auf 'asc' (aufsteigend)
      this.activeSortDirection = 'asc';
    }
    // Aktualisiere die Sortierreihenfolge des DataSources
    this.dataSource.sort?.sort({
      // Sortierspalte ist die geklickte Spalte
      id: column,
      // Sortierrichtung ist die aktuelle Sortierrichtung
      start: this.activeSortDirection,
      // Deaktiviere die Schaltfläche zum Löschen der Sortierung
      disableClear: true,
    });
  }
}

import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
export interface CO2Data {
  country: string;
  company: string;
  emissions: number;
}
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

  constructor(
    private sanitizer: DomSanitizer,
    private dataService: DataService
  ) {
    // Die DataSource initialisieren
    this.dataSource = new MatTableDataSource(this.dataService.getCO2Data());
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
    // Desinfizieren des Filterwerts in der MatTableDataSource
    const sanitizedValue = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.dataSource.filter
    );
    this.dataSource.filter = sanitizedValue;
  }

  /**
   * @param event
   * Wird beim Eingeben eines Suchbegriffs in das Suchfeld aufgerufen
   */
  applyFilter(event: Event) {
    // Zugriff auf das <input> Element, das das Event ausgelöst hat
    const inputElement = event.target as HTMLInputElement;
    // Desinfiziert den Wert des <input> Elements, um XSS-Angriffe zu verhindern
    const sanitizedValue = this.sanitizer.sanitize(
      SecurityContext.HTML,
      inputElement.value
    );
    // Setzt den bereinigten Wert als Filter für die MatTableDataSource
    this.dataSource.filter = sanitizedValue;

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

  /**
   * @param event
   * Wird beim Klicken auf die Schaltfläche zum Löschen der Sortierung aufgerufen
   */
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

  /**
   * @param column
   * Wird beim Klicken auf die Spaltenüberschriften aufgerufen
   * @returns
   * Sortiert die Daten nach der angegebenen Spalte
   * und wechselt die Sortierrichtung, wenn die Spalte bereits sortiert wird
   */
  sortColumn(column: string) {
    if (this.activeSortColumn === column) {
      this.activeSortDirection =
        this.activeSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.activeSortColumn = column;
      this.activeSortDirection = 'asc';
    }

    this.dataSource.sort?.sort({
      id: column,
      start: this.activeSortDirection,
      disableClear: true,
    });
  }
}

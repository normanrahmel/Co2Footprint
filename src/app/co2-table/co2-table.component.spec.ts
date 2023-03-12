import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Co2TableComponent } from './co2-table.component';

describe('Co2TableComponent', () => {
  let component: Co2TableComponent;
  let fixture: ComponentFixture<Co2TableComponent>;
  let sanitizer: DomSanitizer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Co2TableComponent],
      providers: [DomSanitizer],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2TableComponent);
    component = fixture.componentInstance;
    sanitizer = TestBed.inject(DomSanitizer);
    fixture.detectChanges();
  });

  it('should sanitize data', () => {
    // Arrange
    const data = '<script>alert("XSS")</script>';

    // Act
    const sanitizedData: SafeHtml = component.sanitize(data);

    // Assert
    //expect(sanitizedData).toEqual(sanitizer.sanitize(data, 'html'));
    expect(sanitizedData).not.toEqual(data);
  });

  it('should throw error if input is not a string', () => {
    // Arrange
    const data = { foo: 'bar' };

    // Act + Assert
    expect(() => component.sanitize(data)).toThrowError(TypeError);
  });
});

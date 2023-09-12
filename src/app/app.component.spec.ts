import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {By} from '@angular/platform-browser';
import {IconsModule} from './icons.module';

describe('Weather App', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, IconsModule],
      declarations: [AppComponent],
    }).compileComponents();
    // To create the Weather App before each test
    fixture = TestBed.createComponent(AppComponent);
  });

  // To verify that the Weather App was created
  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'weather-app'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('weather-app');
  });

  it("should render 'Weather' as text at the top of the Weather App", () => {
    fixture.detectChanges();
    const weatherAppTitle = fixture.debugElement.query(
      By.css('#weatherTitleDiv')
    );
    expect(weatherAppTitle.nativeElement.textContent.trim()).toBe('Weather');
  });
});

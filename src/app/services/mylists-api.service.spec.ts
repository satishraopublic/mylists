import { TestBed } from '@angular/core/testing';

import { MylistsApiService } from './mylists-api.service';

describe('MylistsApiService', () => {
  let service: MylistsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MylistsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

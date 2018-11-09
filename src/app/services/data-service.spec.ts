import { TestBed } from '@angular/core/testing';

import { DataSerivce} from './data-service';

describe('DataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSerivce = TestBed.get(DataSerivce);
    expect(service).toBeTruthy();
  });
});

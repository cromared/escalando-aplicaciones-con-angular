import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { GroupService } from './group.service';

class HttpClientMock {
  get = jasmine.createSpy();
}

describe('LoginService', () => {
  let service: GroupService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GroupService,
        {
          provides: HttpClient,
          useClass: HttpClientMock
        }
        ]
    });
    service = TestBed.get(GroupService);
    httpClientMock = TestBed.get(HttpClient);  
  });

  it('should be created', () => {
        expect(service).toBeDefined();
  });

  it('should call http ', () => {
    httpClientMock.get.and.returnValue({
      toPromise() {}
    });

    service.getGroups();

    expect(httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.groups);
  });
});

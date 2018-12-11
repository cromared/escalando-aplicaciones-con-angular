import {TestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import {GroupService} from './group.service';

fdescribe('Group Service', () => {
  let service: GroupService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
      GroupService
      ]
  });

  service = TestBed.get(GroupService);

it ('should be created', () => {
  expect(true).toBeDefined();
  });
});

it ('should call http get service', () => {
  expect(true).toBe(false);
});
});

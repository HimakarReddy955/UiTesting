import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from './util';

describe('UsersService', () => {
  let service: UsersService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get all users data", () => {
    service.getUserData().subscribe((users:any)=> {
      expect(users).toBeTruthy();
      expect(users.length).toBe(100);
      const secondUser = users.find((user:any) => user.id === 2);
      expect(secondUser.name).toBe("Jane Smith");
    })

    const mockReq = testingController.expectOne('https://api.example.com/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(USERS))
  })

  it("should get user by ID", () => {
    service.getUserById(100).subscribe((user:any)=> {
      expect(user).toBeTruthy();
      expect(user.name).toBe("Michael Johnson");
    })

    const mockReq = testingController.expectOne('https://api.example.com/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(USERS[2])
    
  })

  it("should update user by ID", () => {
    let changes = {phone: "999-999-9999"}
    service.updateUserById(3,changes).subscribe((user:any)=> {
      expect(user).toBeTruthy();
      expect(user.id).toBe(3);
    })

    const mockReq = testingController.expectOne('https://api.example.com/users');
    expect(mockReq.request.method).toEqual('PUT');
    let modifiedUser = USERS[2];
    modifiedUser.phone = "999-999-9999";
    console.log(mockReq)
    expect(mockReq.request.body.phone).toEqual(changes.phone);
    mockReq.flush(USERS[2]);
  })

  afterEach(()=> {
    testingController.verify()
  })
});

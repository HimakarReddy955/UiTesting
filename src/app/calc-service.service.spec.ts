import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc-service.service"
import { SharedService } from "./shared.service";

describe("CalcSerivce", () => {
  let shared: SharedService;
  let calc: CalcService;
  beforeEach(()=> {
    shared = jasmine.createSpyObj("SharedService", ["sharedFunction"])
    TestBed.configureTestingModule({
      providers: [CalcService, {
        provide: SharedService, useValue: shared
      }]
    });
    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  })
  it("should multiply two numbers", () => {
    const result = calc.multiply(3,5);
    expect(result).toBe(15);
  });

  it("should add two numbers", ()=> {
    const result = calc.add(4,5);
    expect(result).toBe(9);
  })



  // it("should call the sharedFunction",() => {
  //   const shared = jasmine.createSpyObj("SharedService", ["sharedFunction"])
  //   // const shared = new SharedService();
  //   spyOn(shared, "sharedFunction");
  //   const calc = new CalcService(shared);
  //   const result = calc.multiply(3,5);
  //   expect(shared.sharedFunction).toHaveBeenCalled();
  // })
})
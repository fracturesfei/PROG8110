const HST = require("../public/HST.js");

it("tests that Ontario tax is correct", ()=>{
    expect(HST.calculate("ON", 10)).toBe(1.3);
});

it("tests that Alberta Tax is correct", ()=>{
    expect(HST.calculate("AB", 10)).toBe(.5);
});

it("tests that BC Tax is correct", ()=>{
    expect(HST.calculate("BC", 10)).toBe(1.3);
});

it("tests that the province of Manitoba's tax is correct", ()=>{
    expect(HST.calculate("MB", 10)).toBe(1.3);
})

it("tests that the province of NL's tax is correct", ()=>{
    expect(HST.calculate("NL", 10)).toBe(1.5);
})

it("tests that the province of NT's tax is correct", ()=>{
    expect(HST.calculate("NT", 10)).toBe(.5);
})

it("tests that the province of NS's tax is correct", ()=>{
    expect(HST.calculate("NS", 10)).toBe(1.5);
})

it("tests that the province of Manitoba's tax is correct", ()=>{
    expect(HST.calculate("NU", 10)).toBe(.5);
})


it("tests that the province of NB's tax is correct", ()=>{
    expect(HST.calculate("NB", 10)).toBe(1.5);
})

it("tests that the province of QC's tax is correct", ()=>{
    expect(HST.calculate("QC", 10)).toBe(1.5);
})

it("tests that the province of SK's tax is correct", ()=>{
    expect(HST.calculate("SK", 10)).toBe(1.1);
})

it("tests that the province of YT's tax is correct", ()=>{
    expect(HST.calculate("YT", 10)).toBe(.5);
})


it("tests that the province \"asdf\" throws an exception", ()=>{
    try{
        HST.calculate("asdf", 10);
        fail();
    }
    catch(e){
        expect(e.toString()).toBe("invalid province");
    }
});


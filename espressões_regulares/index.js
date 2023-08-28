function PhoneNumber(numberPhone) {
    const fixedNumber = numberPhone.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedNumber.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedNumber.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedNumber.match(/(?<=\)).+/)[0]
}

console.log(new PhoneNumber('+996 (13) 9 9999-5555'))
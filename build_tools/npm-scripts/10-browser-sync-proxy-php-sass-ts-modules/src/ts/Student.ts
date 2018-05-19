
//***************** Classes **********************/

class Students {
    constructor(private lName: string, private fName: string) {

    }

    GetFullName(): string {
        return this.lName + " " + this.fName;
    }
}

export { Students }

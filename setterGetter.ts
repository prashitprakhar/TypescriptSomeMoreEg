class SetterGetter{
    private _fullName: string;

    set fullName(newName: string){
        this._fullName = newName;
    }

    get fullName(): string{
        return this._fullName;
    }

}

let displayName = new SetterGetter();
displayName.fullName = "Prashit Prakhar";
console.log(displayName.fullName);
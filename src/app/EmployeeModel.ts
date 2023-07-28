export class EmployeeModel{
    id!:number;
    name!:string;
    dob=new Date();
    email!:string;
    phoneNo!:string;
    joiningStatus!: string;
    joiningDate=new Date();
    aadharCard!: number;
    address: Address = new Address;
    documents:EmployeeDocuments=new EmployeeDocuments;
    
}


export class Address{
    areaAndStreet!:string;
    city!:string;
    state!:string;
    pinCode!:number;

}

export class EmployeeDocuments{
    id!:number;
    name!:string;
    type!:string;
	size!:number;
    hash!:string;
	fileData!:Blob;
}
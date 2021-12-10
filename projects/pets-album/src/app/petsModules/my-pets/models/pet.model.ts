export class PetModel{
	_id!:string;
	petName:string;
	profile:string;
	description:string;
	creationDate!:Date;
	constructor(petName:string,profile:string,description:string,activo:boolean){
		this.petName=petName;
		this.profile=profile;
		this.description=description;
	}
}
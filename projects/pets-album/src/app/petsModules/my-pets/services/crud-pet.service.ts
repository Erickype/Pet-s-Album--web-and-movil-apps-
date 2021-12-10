import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/pets-album/src/environments/environment';
import { Observable } from 'rxjs';
import { PetModel } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class CrudPetService {

  constructor(private http: HttpClient) { }

	getPets(): Observable<any> {
		return this.http.get<any>(`${environment.API_URL}/pets`);
	}
	getPet(id: string): Observable<any> {
		return this.http.get<any>(`${environment.API_URL}/pets/${id}`);
	}
	addPet(user: Partial<PetModel>): Observable<any> {
		return this.http.post<any>(`${environment.API_URL}/pets`, user);
	}
	deletePet(id: string): Observable<any> {
		return this.http.delete<any>(`${environment.API_URL}/pets/${id}`);
	}
	updatePet(id: string, user: Partial<PetModel>): Observable<any> {
		return this.http.put<any>(`${environment.API_URL}/pets/${id}`, user);
	}
  
}

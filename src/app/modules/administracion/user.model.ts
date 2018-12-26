export class UserModel {
  nombre: string;
  email: string;
  password: string;
  group: string;  

  constructor(values: { [key: string]: any  } = {}) {
    this.nombre = values.nombre;
    this.email = values.email;
    this.password = values.password;
    this.group = values.group;
    
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './homes.html',
  styleUrls: ['./homes.css']
})
export class HomesComponent {

  searchCity = '';

  homes = [
    {
      title: 'Acme Fresh Start Housing',
      city: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
    },
    {
      title: 'A113 Transitional Housing',
      city: 'Santa Monica, CA',
      image: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca'
    },
    {
      title: 'Warm Beds Housing Support',
      city: 'Juneau, AK',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be'
    },
    {
  title: 'Homesteady Housing',
  city: 'Chicago, IL',
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994'
},
{
  title: 'Hopeful Apartment Group',
  city: 'Oakland, CA',
  image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb'
},
{
  title: 'Seriously Safe Towns',
  city: 'Portland, OR',
  image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb'
},
{
  title: 'Capital Safe Towns',
  city: 'Austin, TX',
  image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae'
}

  ];

  get filteredHomes() {
    return this.homes.filter(h =>
      h.city.toLowerCase().includes(this.searchCity.toLowerCase())
    );
  }
}

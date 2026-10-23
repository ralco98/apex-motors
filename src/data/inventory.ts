export interface Vehicle {
  id: number;
  year: number;
  name: string;
  type: 'SUV' | 'Sedan' | 'Truck' | 'EV' | 'Coupe';
  make: string;
  drivetrain: string;
  condition: string;
  miles: string;
  price: number;
  monthly: number;
  image: string;
}

export const inventory: Vehicle[] = [
  {
    id: 1,
    year: 2024,
    name: 'Aurora GT Line',
    type: 'Sedan',
    make: 'Aurora',
    drivetrain: 'AWD',
    condition: 'Certified Pre-Owned',
    miles: '12,400 mi',
    price: 42900,
    monthly: 612,
    image: 'https://images.pexels.com/photos/14487132/pexels-photo-14487132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 2,
    year: 2023,
    name: 'Vantage EX SUV',
    type: 'SUV',
    make: 'Vantage',
    drivetrain: 'AWD',
    condition: 'Certified Pre-Owned',
    miles: '21,800 mi',
    price: 36500,
    monthly: 521,
    image: 'https://images.pexels.com/photos/11808155/pexels-photo-11808155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    year: 2025,
    name: 'Nimbus EV Long Range',
    type: 'EV',
    make: 'Nimbus',
    drivetrain: 'RWD',
    condition: 'New',
    miles: '1,200 mi',
    price: 51200,
    monthly: 731,
    image: 'https://images.pexels.com/photos/10029873/pexels-photo-10029873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 4,
    year: 2022,
    name: 'Ridgeback 4x4 Crew',
    type: 'Truck',
    make: 'Ridgeback',
    drivetrain: '4WD',
    condition: 'Certified Pre-Owned',
    miles: '38,600 mi',
    price: 39750,
    monthly: 567,
    image: 'https://images.pexels.com/photos/34386337/pexels-photo-34386337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 5,
    year: 2024,
    name: 'Corsa Sport Coupe',
    type: 'Coupe',
    make: 'Corsa',
    drivetrain: 'RWD',
    condition: 'Certified Pre-Owned',
    miles: '8,900 mi',
    price: 47300,
    monthly: 675,
    image: 'https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 6,
    year: 2023,
    name: 'Meridian Touring',
    type: 'Sedan',
    make: 'Meridian',
    drivetrain: 'FWD',
    condition: 'Certified Pre-Owned',
    miles: '26,100 mi',
    price: 28400,
    monthly: 405,
    image: 'https://images.pexels.com/photos/28984497/pexels-photo-28984497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 7,
    year: 2025,
    name: 'Vantage Hybrid',
    type: 'SUV',
    make: 'Vantage',
    drivetrain: 'AWD',
    condition: 'New',
    miles: '400 mi',
    price: 44900,
    monthly: 641,
    image: 'https://images.pexels.com/photos/19067088/pexels-photo-19067088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 8,
    year: 2021,
    name: 'Aurora Base',
    type: 'Sedan',
    make: 'Aurora',
    drivetrain: 'FWD',
    condition: 'Pre-Owned',
    miles: '52,300 mi',
    price: 21900,
    monthly: 313,
    image: 'https://images.pexels.com/photos/14696345/pexels-photo-14696345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 9,
    year: 2024,
    name: 'Ridgeback Trail Edition',
    type: 'Truck',
    make: 'Ridgeback',
    drivetrain: '4WD',
    condition: 'Certified Pre-Owned',
    miles: '14,700 mi',
    price: 48600,
    monthly: 694,
    image: 'https://images.pexels.com/photos/34610866/pexels-photo-34610866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const vehicleTypes = ['All', 'SUV', 'Sedan', 'Truck', 'EV', 'Coupe'] as const;
export const makes = ['All', 'Aurora', 'Vantage', 'Nimbus', 'Ridgeback', 'Corsa', 'Meridian'] as const;

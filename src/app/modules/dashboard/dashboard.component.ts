import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {  MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



const Dog_Vaccine_Details= [
  { position: 1, vaccine: 'Distemper', Doses: '2 dose, 3-4 wk  apart', Booster: 'Annual' },
  { position: 2, vaccine: 'Adenovirus – 2 ', Doses:'2 dose, 3-4 wk apart', Booster: 'Annual' },
  { position: 3, vaccine: 'Parainfluenza', Doses:'2 dose, 3-4 wk apart', Booster: 'Annual' },
  { position: 4, vaccine: 'Bordetella bronchiseptica', Doses:'2-3 doses 3 wk apart', Booster: 'Annual' },
  { position: 5, vaccine: 'Parvovirus', Doses: '1 dose', Booster: 'B' },
  { position: 6, vaccine: 'Lyme Disease : Borrelia burgdorferi ', Doses:'2-3 doses 3 wks apart', Booster: 'Annual' },
  { position: 7, vaccine: 'Corona Virus', Doses:'2-3 doses, 3 wks apart', Booster: 'Annual' },
  { position: 8, vaccine: 'Giardia', Doses: '2 doses, 3-4 wk apart', Booster: '6 Month' },
  { position: 9, vaccine: 'Leptospirosis', Doses:'2 doses, 3-4 wk apart', Booster: 'Annual' },
  { position: 10, vaccine: 'Rabies', Doses: '1 dose', Booster: 'Annual' }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = [];
  bigChart = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'vaccine', 'Doses', 'Booster'];
  dataSource = new MatTableDataSource(Dog_Vaccine_Details);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    
    this.bigChart = this.dashboardService.bigChart();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}

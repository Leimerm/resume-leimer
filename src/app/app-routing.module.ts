import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentEmploymentComponent } from './current-employment/current-employment.component';
import { EducationComponent } from './education/education.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PreviousEmploymentComponent } from './previous-employment/previous-employment.component';
import { SkillsComponent } from './skills/skills.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path:  'training', component: TrainingComponent, pathMatch: 'full' },
  { path:  'education', component: EducationComponent, pathMatch: 'full' },
  { path:  'introduction', component: IntroductionComponent, pathMatch: 'full' },
  { path:  'skills', component: SkillsComponent, pathMatch: 'full' },
  { path:  'current_employment', component: CurrentEmploymentComponent, pathMatch: 'full' },
  { path:  'previous_employment', component: PreviousEmploymentComponent, pathMatch: 'full' },
  { path:  'portfolio', component: PortfolioComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ConfigurationService } from './../../../../data/service/configuration.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Configuration } from 'src/app/data/model/configuration';
import { Color } from 'src/app/data/model/color';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Fonts } from 'src/app/data/contansts/fonts';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent implements OnInit {

  fonts = new Fonts();
  configForm!: FormGroup;
  configuration: Configuration | undefined;
  colorList: Color[] | undefined;


  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.configuration = this.activatedRoute.snapshot.data['configuration']
    this.colorList = this.activatedRoute.snapshot.data['colorList']
    this.configForm = this.formBuilder.group({
      name: new FormControl(this.configuration?.name, Validators.required),
      primaryColor: [this.configuration?.primaryColor, Validators.required],
      secondaryColor: [this.configuration?.secondaryColor, Validators.required],
      headingTextFont: [this.configuration?.headingTextFont, Validators.required],
      bodyTextFont: [this.configuration?.bodyTextFont, Validators.required]
    })
  }

  submitForm(): void {
    console.log("submit form")
    let config = this.configForm.getRawValue() as Configuration
    config.blackPageTitle = this.configuration?.blackPageTitle ?? true
    config.logoColor = this.configuration?.logoColor ?? "#FFFFFF"
    config.showExercisePhoto = this.configuration?.showExercisePhoto ?? true

    console.log(config)
    this.configurationService.saveConfiguration(config).subscribe()
  }

}

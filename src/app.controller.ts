import { Controller, Get, Render, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthenticationService } from './authentication/authentication.service';
import { CarModelService } from './car-model/car-model.service';
import { CarService } from './car/car.service';
import { PostService } from './post/post.service';

@Controller()
@ApiTags('Views')
export class AppController {
  constructor(
    private readonly carService: CarService,
    private readonly authenticationService: AuthenticationService,
    private readonly carModelService: CarModelService,
    private readonly postService: PostService,
  ) {}

  @Get()
  @Render('home.hbs')
  renderMain() {
    return {};
  }

  @Get('/admin')
  @Render('admin.hbs')
  renderAdmin() {
    return { layout: 'admin' };
  }

  @Get('/admin/cars')
  @Render('adminCars.hbs')
  async renderCars() {
    const cars = await this.carService.getAllCars();
    return { layout: 'admin', cars };
  }

  @Get('/admin/create-car')
  @Render('adminCreateCar.hbs')
  renderCreateCar() {
    return { layout: 'admin' };
  }

  @Get('/admin/models')
  @Render('adminModels.hbs')
  async renderModels() {
    const models = await this.carModelService.getAllModels();
    return { layout: 'admin', models };
  }

  @Get('/admin/create-model')
  @Render('adminCreateModel.hbs')
  renderCreateModel() {
    return { layout: 'admin' };
  }

  @Get('/admin/posts')
  @Render('adminPosts.hbs')
  async renderPosts() {
    const posts = await this.postService.getAllPosts();
    return { layout: 'admin', posts };
  }

  @Get('/admin/create-post')
  @Render('adminCreatePost.hbs')
  renderCreatePost() {
    return { layout: 'admin' };
  }

  @Get('/exit')
  exit(@Res() response: Response) {
    response.setHeader(
      'Set-Cookie',
      this.authenticationService.getCookieForLogOut(),
    );
    response.redirect('/');
  }
}

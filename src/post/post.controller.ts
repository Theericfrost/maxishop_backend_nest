import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { IsAdminGuard } from 'src/authentication/guards/isAdmin-authentication.guard';
import JwtAuthenticationGuard from '../authentication/guards/jwt-authentication.guard';
import { CreatePostDto } from './dto/CreatePostDto.dto';
import { UpdatePostDto } from './dto/UpdatePostDto.dto';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/post')
@ApiTags('Post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  @UseGuards(IsAdminGuard)
  async createPost(@Body() post: CreatePostDto) {
    return this.postService.createPost(post);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postService.updatePost(Number(id), post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postService.deletePost(Number(id));
  }
}

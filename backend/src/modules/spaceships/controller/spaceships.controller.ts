import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { ApiExceptionResponse } from '../../../common/decorators/api-exception-response.decorator';
import { ApiException } from '../../../common/types/api-exception.type';
import { API_ERRORS } from '../../../constant/api-errors.constant';
import { HttpStatusCodes } from '../../../constant/http-status-codes.constant';
import { CreateSpaceShipDto } from '../dto/create-spaceship.dto';
import { Spaceship } from '../interface/spaceship.interface';
import { SpaceshipsService } from '../service/spaceships.service';

@Controller('spaceships')
export class SpaceshipsController {
  constructor(
    private readonly service: SpaceshipsService
  ) { }

  @ApiBody({
    description: 'Spaceship object',
    type: CreateSpaceShipDto
  })
  @ApiResponse({
    status: HttpStatusCodes.CREATED,
    description: 'Created spaceship body',
    type: Spaceship
  })
  @ApiExceptionResponse(API_ERRORS.SPACESHIP_EXISTS)
  @Post()
  async create(
    @Body() data: CreateSpaceShipDto
  ): Promise<Spaceship> {
    return this.service.create(data);
  }

  @ApiResponse({
    status: HttpStatusCodes.OK,
    description: 'List of spaceships',
    type: [Spaceship]
  })
  @Get()
  async getAll(): Promise<Spaceship[]> {
    return this.service.findAll();
  }

  @ApiResponse({
    status: HttpStatusCodes.OK,
    description: 'Spaceship object',
    type: Spaceship
  })
  @ApiExceptionResponse(API_ERRORS.SPACESHIP_NOT_FOUND)
  @Get(':id')
  async getById(
    @Param('id') id: string
  ): Promise<Spaceship> {
    const find = await this.service.findById(id);

    if (!find) {
      throw new ApiException(API_ERRORS.SPACESHIP_NOT_FOUND);
    }

    return find;
  }

  @ApiBody({
    description: 'Spaceship object',
    type: CreateSpaceShipDto
  })
  @ApiResponse({
    status: HttpStatusCodes.CREATED,
    description: 'Created spaceship body',
    type: Spaceship
  })
  @ApiExceptionResponse(
    API_ERRORS.SPACESHIP_NOT_FOUND,
    API_ERRORS.SPACESHIP_EXISTS
  )
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: CreateSpaceShipDto
  ): Promise<Spaceship> {
    return await this.service.update(id, data);
  }
}

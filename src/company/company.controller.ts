import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { I18n, I18nContext } from "nestjs-i18n";
import { AuthUser } from "src/common/decorators/auth-user.decorator";
import { setRole } from "src/common/decorators/setRole.decorator";
import { I18nTranslations } from "src/i18n/generated/i18n.generated";
import { CompanyService } from "./company.service";
import {
  CreateCompanyDto,
  CreateCompanyResponseDto,
} from "./dto/create-company.dto";
import {
  FindAllCompaniesQueryDto,
  FindOneCompanyResponseDto,
} from "./dto/find-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { DeleteCompanyDto } from "./dto/delete-company.dto";

@ApiTags(`company`)
@Controller({
  version: `1`,
  path: `company`,
})
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @setRole([`ANY`])
  async create(
    @Body() createCompanyDto: CreateCompanyDto,
    @AuthUser() user: User,
    @I18n() i18n: I18nContext<I18nTranslations>,
  ): Promise<CreateCompanyResponseDto> {
    return await this.companyService.create(createCompanyDto, user, i18n);
  }

  @Get()
  findAll(
    @Query() query: FindAllCompaniesQueryDto,
    @I18n() i18n: I18nContext<I18nTranslations>,
  ) {
    return this.companyService.findAll(query, i18n);
  }

  @Get(`:id`)
  async findOne(
    @Param(`id`) id: string,
    @I18n() i18n: I18nContext<I18nTranslations>,
  ): Promise<FindOneCompanyResponseDto> {
    return await this.companyService.findOne(+id, i18n);
  }

  @Patch(`:id`)
  update(@Param(`id`) id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(`:id`)
  @setRole([`ADMIN`])
  remove(
    @Param(`id`) id: string,
    @I18n() i18n: I18nContext<I18nTranslations>,
  ): Promise<DeleteCompanyDto> {
    return this.companyService.remove(+id, i18n);
  }
}

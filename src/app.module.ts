import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { JwtModule } from "./jwt/jwt.module";
import { ConfigModule } from "@nestjs/config";
import { validationSchema } from "./common/config/config.schema";
import { config } from "./common/config/config";
import { PrismaModule } from "./prisma/prisma.module";
import { AcceptLanguageResolver, I18nModule, QueryResolver } from "nestjs-i18n";
import { CompanyModule } from "./company/company.module";
import * as path from "path";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
      load: [config],
    }),
    I18nModule.forRoot({
      fallbackLanguage: `en`,
      loaderOptions: {
        path: path.join(__dirname, `/i18n/`),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: [`lang`] },
        AcceptLanguageResolver,
      ],
      typesOutputPath: path.join(
        __dirname,
        `../src/generated/i18n.generated.ts`,
      ),
    }),
    AuthModule,
    JwtModule,
    PrismaModule,
    CompanyModule,
  ],
})
export class AppModule {}

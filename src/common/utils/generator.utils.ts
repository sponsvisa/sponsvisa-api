import { User, UserRole } from "@prisma/client";
import { I18nContext } from "nestjs-i18n";
import { CompanyController } from "src/company/company.controller";

export const stringGenerator = (length: number, character): string =>
  new Array(length + 1).join(character);

export const mockUser = (
  user = {
    id: 1,
    createdAt: new Date(),
    email: `user@test.com`,
    isVerified: true,
    name: `test`,
    password: ``,
    role: UserRole.USER,
  },
): User => user;

export const mockI18n = () =>
  ({
    t: jest.fn().mockReturnValue(`random translated text`),
    lang: `en`,
  } as unknown as I18nContext<CompanyController>);

export class PrismaServiceMock {
  // Define mock methods and properties that you need for testing
  public company = {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
  };
  public user = {
    findFirst: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
    create: jest.fn(),
  };
}

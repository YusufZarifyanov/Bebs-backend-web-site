import { Injectable } from '@nestjs/common';

import * as uuid from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { FileError } from 'src/shared/errors';

@Injectable()
export class FileService {
  async createFile(file: Express.Multer.File): Promise<string> {
    try {
      const fileExtension = file.originalname.split('.').pop();
      const fileName = uuid.v4() + '.' + fileExtension;
      const fielPath = path.resolve(__dirname, '..', '..', 'static');

      if (!fs.existsSync(fielPath)) {
        fs.mkdirSync(fielPath, { recursive: true });
      }

      fs.writeFileSync(path.join(fielPath, fileName), file.buffer);

      return fileName;
    } catch (err) {
      throw new FileError();
    }
  }
}

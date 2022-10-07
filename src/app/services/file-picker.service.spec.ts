import { TestBed } from '@angular/core/testing';

import { FilePickerService } from './file-picker.service';
import { files, filesStructure } from '../mock';

describe('FilePickerService', () => {
  let service: FilePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FilePickerService] });
    service = TestBed.inject(FilePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tree compatible node structure', () => {
    expect(service.getFilesStructure(files)).toEqual(filesStructure);
  });
});

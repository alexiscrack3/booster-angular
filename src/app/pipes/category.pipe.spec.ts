import { CategoryPipe } from './category.pipe';

describe('CategoryPipe', () => {
  const pipe = new CategoryPipe();

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns noun', () => {
    const value = pipe.transform(0);
    expect(value).toBe('noun');
  });

  it('returns verb', () => {
    const value = pipe.transform(1);
    expect(value).toBe('verb');
  });

  it('returns adjetive', () => {
    const value = pipe.transform(2);
    expect(value).toBe('adjective');
  });

  it('returns phrasal verb', () => {
    const value = pipe.transform(3);
    expect(value).toBe('phrasal verb');
  });
});

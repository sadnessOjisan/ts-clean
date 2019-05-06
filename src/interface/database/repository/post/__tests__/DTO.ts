import { Post } from '../../../../../domain/Post';
import { toCreatePostDTO, toPostAndUserDTO } from '../DTO';

describe('repository', () => {
  describe('post dto', () => {
    it('ドメインオブジェクトからCreatePostDTOを生成', () => {
      const post = new Post(1, 'hoge', 2);
      const dto = toCreatePostDTO(post);
      const expected = {
        content: 'hoge',
        userId: 2
      };
      expect(dto).toEqual(expected);
    });
  });
});

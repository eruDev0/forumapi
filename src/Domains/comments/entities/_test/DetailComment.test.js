const DetailComment = require('../DetailComment');

describe('DetailComment entities', () => {
  it('should throw error when payload not contain needed property', () => {
    // Arrange
    const payload = {
      id: 'comment-123',
      username: 'erudev',
    };

    // Act & Assert
    expect(() => new DetailComment(payload)).toThrowError('DETAIL_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      username: true,
      content: [],
      date: {},
      likeCount: '0',
      replies: 'replies',
    };

    // Act & Assert
    expect(() => new DetailComment(payload)).toThrowError('DETAIL_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create detailComment object correctly', () => {
    // Arrange
    const payload = {
      id: 'comment-123',
      username: 'erudev',
      content: 'Sebuah komentar',
      date: '2022',
      likeCount: 0,
      replies: [],
    };

    // Action
    const detailComment = new DetailComment(payload);

    // Assert
    expect(detailComment.id).toEqual(payload.id);
    expect(detailComment.username).toEqual(payload.username);
    expect(detailComment.content).toEqual(payload.content);
    expect(detailComment.date).toEqual(payload.date);
    expect(detailComment.likeCount).toEqual(payload.likeCount);
    expect(detailComment.replies).toEqual(payload.replies);
  });

  it('should return \'**komentar telah dihapus**\' when is_deleted is true', () => {
    // Arrange
    const payload = {
      id: 'comment-123',
      username: 'erudev',
      content: 'Sebuah komentar',
      date: '2022',
      is_deleted: true,
      likeCount: 0,
      replies: [],
    };

    // Action
    const detailComment = new DetailComment(payload);

    // Assert
    expect(detailComment.content).toEqual('**komentar telah dihapus**');
  });
});

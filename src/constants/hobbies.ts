export type HobbyCategory = 'sports' | 'intellectual' | 'art';

export interface Hobby {
  id: string;
  name: string;
  category: HobbyCategory;
  imageUrl: string;
  description: string;
}

export const CATEGORY_LABEL: Record<HobbyCategory, string> = {
  sports: '운동형',
  intellectual: '지능형',
  art: '예술형',
};

export const HOBBIES: Hobby[] = [
  // 운동형
  {
    id: 'jogging-running',
    name: '조깅/러닝',
    category: 'sports',
    imageUrl: '/thumbnails/running.jpg',
    description:
      '가장 접근하기 쉬운 유산소 운동으로, 체력 향상과 스트레스 해소에 효과적입니다.',
  },
  {
    id: 'yoga',
    name: '요가',
    category: 'sports',
    imageUrl: '/thumbnails/yoga.jpg',
    description:
      '신체의 유연성과 균형감각을 향상시키며, 마음의 평화를 찾을 수 있는 운동입니다.',
  },
  {
    id: 'swimming',
    name: '수영',
    category: 'sports',
    imageUrl: '/thumbnails/swimming.jpg',
    description:
      '전신 운동으로 근력과 심폐지구력을 동시에 향상시키는 효과적인 운동입니다.',
  },
  {
    id: 'cycling',
    name: '자전거',
    category: 'sports',
    imageUrl: '/thumbnails/cycling.jpg',
    description:
      '야외에서 즐길 수 있는 유산소 운동으로, 관광과 운동을 동시에 즐길 수 있습니다.',
  },
  {
    id: 'climbing',
    name: '클라이밍',
    category: 'sports',
    imageUrl: '/thumbnails/climbing.jpg',
    description:
      '전신 근력을 기르고 집중력을 향상시키며, 문제 해결 능력을 키울 수 있는 운동입니다.',
  },
  {
    id: 'dance',
    name: '댄스',
    category: 'sports',
    imageUrl: '/thumbnails/dance.jpg',
    description:
      '리듬감과 표현력을 기르며, 즐겁게 운동할 수 있는 활동형 취미입니다.',
  },
  // 지능형
  {
    id: 'reading',
    name: '독서',
    category: 'intellectual',
    imageUrl: '/thumbnails/reading.jpg',
    description:
      '다양한 지식과 경험을 쌓으며, 사고력을 넓히고 상상력을 키울 수 있는 활동입니다.',
  },
  {
    id: 'puzzle',
    name: '퍼즐',
    category: 'intellectual',
    imageUrl: '/thumbnails/puzzle.jpg',
    description:
      '논리적 사고력과 집중력을 향상시키며, 문제 해결 능력을 기를 수 있습니다.',
  },
  {
    id: 'chess',
    name: '체스',
    category: 'intellectual',
    imageUrl: '/thumbnails/chess.jpg',
    description:
      '전략적 사고와 예측 능력을 기르며, 깊이 있는 사고력을 발달시킬 수 있습니다.',
  },
  {
    id: 'programming',
    name: '프로그래밍',
    category: 'intellectual',
    imageUrl: '/thumbnails/programming.jpg',
    description:
      '논리적 사고와 창의적 문제 해결 능력을 기르며, 실용적인 기술을 습득할 수 있습니다.',
  },
  {
    id: 'language-learning',
    name: '외국어 학습',
    category: 'intellectual',
    imageUrl: '/thumbnails/foreign_language_learning.jpg',
    description:
      '새로운 언어를 배우며 문화적 이해를 넓히고, 인지 능력을 향상시킬 수 있습니다.',
  },
  {
    id: 'photography',
    name: '사진 촬영',
    category: 'intellectual',
    imageUrl: '/thumbnails/photography.jpg',
    description:
      '순간을 기록하며 미적 감각과 관찰력을 기르고, 기술적 지식을 습득할 수 있습니다.',
  },
  // 예술형
  {
    id: 'drawing',
    name: '그림 그리기',
    category: 'art',
    imageUrl: '/thumbnails/drawing.jpg',
    description:
      '창의적 표현과 미적 감각을 발휘하며, 내면의 감정을 시각적으로 표현할 수 있습니다.',
  },
  {
    id: 'instrument',
    name: '악기 연주',
    category: 'art',
    imageUrl: '/thumbnails/instrument_playing.jpg',
    description:
      '음악적 감각과 리듬감을 기르며, 감성을 표현하고 스트레스를 해소할 수 있습니다.',
  },
  {
    id: 'cooking',
    name: '요리',
    category: 'art',
    imageUrl: '/thumbnails/cooking.jpg',
    description:
      '창의적인 조리와 플레이팅을 통해 미적 감각을 발휘하고, 실용적인 기술을 습득할 수 있습니다.',
  },
  {
    id: 'calligraphy',
    name: '서예',
    category: 'art',
    imageUrl: '/thumbnails/calligraphy.jpg',
    description:
      '전통 예술을 통해 집중력과 정신적 평화를 찾으며, 아름다운 글씨를 완성할 수 있습니다.',
  },
  {
    id: 'pottery',
    name: '도자기 만들기',
    category: 'art',
    imageUrl: '/thumbnails/pottery.jpg',
    description:
      '손으로 만드는 과정에서 창의성을 발휘하며, 실용적이면서도 예술적인 작품을 만들 수 있습니다.',
  },
  {
    id: 'gardening',
    name: '정원 가꾸기',
    category: 'art',
    imageUrl: '/thumbnails/gardening.jpg',
    description:
      '자연과 교감하며 공간을 아름답게 꾸미고, 식물을 키우는 과정에서 평화를 찾을 수 있습니다.',
  },
];


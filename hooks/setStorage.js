export function filterList() {
  const filter = ['할 일', '오늘', '미분류', '공유 노트', '동기화되지 않음', '단어가 포함 된 노트'];

  localStorage.setItem('filter', filter);
}
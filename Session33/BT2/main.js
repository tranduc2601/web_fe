function countCharacters() {
  const textArea = document.getElementById('textArea');
  const charCount = document.getElementById('charCount');
  const text = textArea.value;
  charCount.innerText = `${text.length} ký tự`;
}

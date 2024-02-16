    document.getElementById('start-button').addEventListener('click', function() {
            startCounting();
        });

        function startCounting() {
            var text = document.getElementById('textarea').value;
            var option = document.getElementById('options').value;
            var wordCount = 0;
            var sentenceCount = 0;
            var paragraphCount = 0;

            if (option === 'Word' || option === 'All') {
                
                wordCount = text.trim().split(/\s+/).length;
            }
            if (option === 'Sentence' || option === 'All') {
               
                sentenceCount = text.split(/[.!?]+/).length - 1;
            }
            if (option === 'Paragraph' || option === 'All') {
                
                paragraphCount = text.split(/\n\s*\n/).length;
            }

            document.getElementById('word-count').innerText = wordCount + ' Words';
            document.getElementById('sentence-count').innerText = sentenceCount + ' Sentences';
            document.getElementById('paragraph-count').innerText = paragraphCount + ' Paragraphs';
        }
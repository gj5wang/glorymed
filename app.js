// Medical term database
        const medicalTerms = {
            'dyspnea': {
                simple: 'Shortness of Breath',
                explanation: 'Difficulty breathing or feeling like you can\'t get enough air.',
                whatItMeans: 'Can feel like breathlessness, chest tightness, or having to work hard to breathe.',
                nextSteps: 'Can be caused by many things - heart problems, lung issues, anxiety, or being out of shape. Severe or sudden dyspnea needs immediate medical attention.'
            },
            'auscultation': {
                simple: 'Listening with a Stethoscope',
                explanation: 'When a doctor listens to sounds inside your body using a stethoscope, usually your heart, lungs, or intestines.',
                whatItMeans: 'Helps doctors hear if your organs are working properly. They can detect abnormal sounds like wheezing, heart murmurs, or fluid in lungs.',
                nextSteps: 'This is a routine part of physical exams. You\'ll be asked to breathe deeply while the doctor listens to your chest and back.'
            },
            'fever': {
                simple: 'High Body Temperature',
                explanation: 'Body temperature above normal (usually above 100.4°F or 38°C).',
                whatItMeans: 'Your body raises its temperature to fight infection. It\'s a sign your immune system is working.',
                nextSteps: 'Stay hydrated, rest, take fever reducers if needed. Seek care if very high (103°F+) or lasts more than 3 days.'
            },
            'chills': {
                simple: 'Feeling Cold and Shivering',
                explanation: 'Feeling cold and shaking, often happens with fever.',
                whatItMeans: 'Your body is trying to raise its temperature. Common with infections.',
                nextSteps: 'Bundle up, drink warm fluids. Usually goes away when fever is treated.'
            },
            'cough': {
                simple: 'Coughing',
                explanation: 'Reflex that clears your throat and airways of mucus, irritants, or foreign particles.',
                whatItMeans: 'Can be dry or produce mucus. May indicate infection, allergies, or irritation.',
                nextSteps: 'Most coughs from colds go away in 2-3 weeks. See doctor if bloody, lasts over 3 weeks, or with fever.'
            },
            'nasal congestion': {
                simple: 'Stuffy Nose',
                explanation: 'Blocked or stuffy feeling in your nose from swollen blood vessels and tissues.',
                whatItMeans: 'Makes it hard to breathe through your nose. Usually from colds, allergies, or sinus infections.',
                nextSteps: 'Use saline spray, steam inhalation, or decongestants. Stay hydrated.'
            },
            'nausea': {
                simple: 'Feeling Sick to Your Stomach',
                explanation: 'Uncomfortable feeling in your stomach that makes you feel like you might vomit.',
                whatItMeans: 'Can be caused by infections, motion sickness, pregnancy, food poisoning, or many medications.',
                nextSteps: 'Sip clear fluids, eat bland foods (crackers, toast), rest. Seek care if severe or with other symptoms.'
            },
            'vomiting': {
                simple: 'Throwing Up',
                explanation: 'Forcefully emptying stomach contents through the mouth.',
                whatItMeans: 'Your body\'s way of getting rid of something harmful or responding to illness.',
                nextSteps: 'Stay hydrated with small sips. If can\'t keep fluids down for 24 hours or with severe pain, seek medical care.'
            },
            'constitutional': {
                simple: 'General Body Symptoms',
                explanation: 'Symptoms affecting your whole body rather than one specific part.',
                whatItMeans: 'Includes things like fever, chills, fatigue, weight changes - symptoms you feel overall.',
                nextSteps: 'Doctors ask about these to understand how sick you are overall.'
            },
            'respiratory': {
                simple: 'Breathing-Related',
                explanation: 'Anything related to your breathing system - lungs, airways, nose, throat.',
                whatItMeans: 'Includes symptoms like cough, shortness of breath, wheezing, chest tightness.',
                nextSteps: 'Important to report any breathing problems to your doctor.'
            },
            'ent': {
                simple: 'Ear, Nose, and Throat',
                explanation: 'Medical specialty dealing with ear, nose, and throat conditions.',
                whatItMeans: 'ENT symptoms include sore throat, ear pain, nasal congestion, sinus issues.',
                nextSteps: 'If you have persistent issues in these areas, you might see an ENT specialist.'
            },
            'gi': {
                simple: 'Stomach and Digestive System',
                explanation: 'Gastrointestinal - refers to your digestive tract from mouth to anus.',
                whatItMeans: 'GI symptoms include nausea, vomiting, diarrhea, constipation, stomach pain.',
                nextSteps: 'Common issues are usually temporary, but persistent problems need medical evaluation.'
            },
            'cetirizine': {
                simple: 'Zyrtec (Allergy Medicine)',
                explanation: 'An antihistamine medication used to relieve allergy symptoms like sneezing, itching, watery eyes, and runny nose.',
                whatItMeans: 'This medication blocks histamine, a substance your body makes during an allergic reaction.',
                nextSteps: 'Take as directed. May cause drowsiness in some people. Avoid alcohol while taking this medication.'
            },
            'dextromethorphan': {
                simple: 'Cough Suppressant',
                explanation: 'A medication that helps stop or reduce coughing by affecting the signals in your brain that trigger the cough reflex.',
                whatItMeans: 'Found in many over-the-counter cough medicines. Helps you stop coughing so you can rest and sleep better.',
                nextSteps: 'Follow dosage instructions carefully. Don\'t exceed recommended dose. Not for children under 4. Avoid if taking certain antidepressants.'
            },
            'prn': {
                simple: 'As Needed',
                explanation: 'Latin abbreviation for "pro re nata" - take this medication only when you need it, not on a regular schedule.',
                whatItMeans: 'You don\'t have to take this every day. Only use it when you have symptoms.',
                nextSteps: 'Follow the maximum daily dose instructions. Don\'t exceed the recommended amount even if symptoms persist.'
            },
            'mg': {
                simple: 'Milligrams',
                explanation: 'A unit of measurement for medication dosage. 1,000 milligrams equals 1 gram.',
                whatItMeans: 'This tells you how much of the active ingredient is in each dose.',
                nextSteps: 'Always take the exact dose prescribed. Don\'t adjust without talking to your doctor.'
            },
            'allergy': {
                simple: 'Allergic Reaction',
                explanation: 'When your immune system overreacts to a normally harmless substance like pollen, pet dander, or certain foods.',
                whatItMeans: 'Your body mistakenly thinks something harmless is dangerous and attacks it, causing symptoms.',
                nextSteps: 'Identify and avoid triggers when possible. Keep allergy medication on hand during high-risk seasons.'
            },
            'qd': {
                simple: 'Once Daily',
                explanation: 'Latin abbreviation meaning "quaque die" - take this medication one time per day.',
                whatItMeans: 'Take at the same time each day for best results.',
                nextSteps: 'Set a daily reminder so you don\'t forget your dose.'
            },
            'tid': {
                simple: 'Three Times Daily',
                explanation: 'Latin abbreviation meaning "ter in die" - take this medication three times per day.',
                whatItMeans: 'Space doses evenly throughout the day (e.g., breakfast, lunch, dinner).',
                nextSteps: 'Try to take at the same times each day for consistent medication levels.'
            },
            'qid': {
                simple: 'Four Times Daily',
                explanation: 'Latin abbreviation meaning "quater in die" - take this medication four times per day.',
                whatItMeans: 'Space doses about 6 hours apart throughout the day.',
                nextSteps: 'Set reminders for each dose time to maintain consistent medication levels.'
            },
            'po': {
                simple: 'By Mouth',
                explanation: 'Latin abbreviation for "per os" - take this medication orally (swallow it).',
                whatItMeans: 'This is a pill, capsule, or liquid you swallow.',
                nextSteps: 'Take with water unless directed otherwise. Some medications work best with food.'
            },
            'ibuprofen': {
                simple: 'Advil/Motrin (Pain Reliever)',
                explanation: 'A nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation.',
                whatItMeans: 'Helps with headaches, muscle aches, arthritis pain, and reduces fever.',
                nextSteps: 'Take with food to prevent stomach upset. Don\'t exceed maximum daily dose. Can affect kidneys with long-term use.'
            },
            'acetaminophen': {
                simple: 'Tylenol (Pain Reliever)',
                explanation: 'A pain reliever and fever reducer that works differently than ibuprofen.',
                whatItMeans: 'Good for pain and fever but doesn\'t reduce inflammation like ibuprofen does.',
                nextSteps: 'Safe for most people but can damage liver if you take too much. Never exceed 3,000-4,000mg per day.'
            },
            'aspirin': {
                simple: 'Blood Thinner/Pain Reliever',
                explanation: 'Medication that prevents blood clots and reduces pain, fever, and inflammation.',
                whatItMeans: 'Often prescribed to prevent heart attacks and strokes by keeping blood from clotting too easily.',
                nextSteps: 'Take with food. Can cause stomach bleeding. Don\'t stop suddenly if taking for heart protection.'
            },
            'antibiotic': {
                simple: 'Infection-Fighting Medicine',
                explanation: 'Medication that kills bacteria or stops them from multiplying.',
                whatItMeans: 'Only works for bacterial infections, not viruses like colds or flu.',
                nextSteps: 'Always complete the full course even if you feel better. Stopping early can lead to antibiotic resistance.'
            },
            'prednisone': {
                simple: 'Steroid (Anti-Inflammatory)',
                explanation: 'A corticosteroid that reduces inflammation and suppresses the immune system.',
                whatItMeans: 'Powerful anti-inflammatory used for conditions like asthma, arthritis, and allergic reactions.',
                nextSteps: 'Take with food. Don\'t stop suddenly - needs to be tapered down. Can raise blood sugar and blood pressure.'
            },
            'statin': {
                simple: 'Cholesterol-Lowering Medicine',
                explanation: 'Medication that lowers cholesterol levels in your blood by blocking cholesterol production in the liver.',
                whatItMeans: 'Helps prevent heart attacks and strokes by reducing bad cholesterol (LDL).',
                nextSteps: 'Usually taken at bedtime. May cause muscle aches. Get regular blood tests to monitor liver function.'
            },
            'lisinopril': {
                simple: 'Blood Pressure Medicine (ACE Inhibitor)',
                explanation: 'Medication that relaxes blood vessels to lower blood pressure and reduce strain on the heart.',
                whatItMeans: 'Makes it easier for your heart to pump blood throughout your body.',
                nextSteps: 'May cause dry cough. Stand up slowly to avoid dizziness. Monitor blood pressure regularly.'
            },
            'omeprazole': {
                simple: 'Heartburn Medicine (Proton Pump Inhibitor)',
                explanation: 'Reduces the amount of acid your stomach produces, helping with heartburn and GERD.',
                whatItMeans: 'Helps heal and prevent damage to your esophagus from stomach acid.',
                nextSteps: 'Take before meals, usually in the morning. May take a few days to feel full effect.'
            },
            'albuterol': {
                simple: 'Asthma Rescue Inhaler',
                explanation: 'Fast-acting medication that opens airways in your lungs to help you breathe easier.',
                whatItMeans: 'Used during asthma attacks or when you feel wheezing or shortness of breath.',
                nextSteps: 'Keep with you at all times. If you need it more than twice a week, tell your doctor.'
            },
            'insulin': {
                simple: 'Diabetes Injection',
                explanation: 'Hormone that helps your body use sugar (glucose) for energy. People with diabetes need extra insulin.',
                whatItMeans: 'Lowers blood sugar by helping glucose enter your cells.',
                nextSteps: 'Must be injected. Timing and dosage are critical. Monitor blood sugar regularly. Keep refrigerated.'
            },
            'antihistamine': {
                simple: 'Allergy Medicine',
                explanation: 'Medication that blocks histamine, reducing allergy symptoms like sneezing, itching, and runny nose.',
                whatItMeans: 'Helps control your body\'s allergic response to triggers like pollen, dust, or pet dander.',
                nextSteps: 'Some cause drowsiness, others don\'t. Take before exposure to allergens for best prevention.'
            },
            'hypertension': {
                simple: 'High Blood Pressure',
                explanation: 'Your blood is pushing too hard against the walls of your arteries. Think of it like a garden hose with too much water pressure.',
                whatItMeans: 'Over time, this can damage your heart and blood vessels. The good news is it can usually be managed with lifestyle changes and medication.',
                nextSteps: 'Monitor your blood pressure regularly, reduce salt intake, exercise, and take prescribed medications.'
            },
            'hyperglycemia': {
                simple: 'High Blood Sugar',
                explanation: 'There\'s too much sugar (glucose) in your blood. Your body either isn\'t making enough insulin or isn\'t using it properly.',
                whatItMeans: 'This can make you feel tired, thirsty, and need to urinate frequently. Long-term high blood sugar can damage organs.',
                nextSteps: 'Monitor blood sugar levels, follow a balanced diet, exercise regularly, and take diabetes medications if prescribed.'
            },
            'myocardial infarction': {
                simple: 'Heart Attack',
                explanation: 'Blood flow to part of your heart muscle was blocked, causing damage to that area. It\'s like a traffic jam preventing oxygen from reaching its destination.',
                whatItMeans: 'This is a medical emergency. Heart muscle can die without oxygen, but quick treatment can limit damage.',
                nextSteps: 'Call 911 immediately if experiencing chest pain. Follow cardiac rehabilitation and lifestyle changes to prevent another one.'
            },
            'diabetes mellitus': {
                simple: 'Diabetes (High Blood Sugar Disease)',
                explanation: 'Your body has trouble controlling blood sugar levels. Either your pancreas doesn\'t make enough insulin, or your body doesn\'t respond to insulin properly.',
                whatItMeans: 'You\'ll need to monitor your diet, check blood sugar regularly, and possibly take medication to keep levels healthy.',
                nextSteps: 'Work with your doctor on a diabetes management plan including diet, exercise, and medication if needed.'
            },
            'type 2 diabetes mellitus': {
                simple: 'Type 2 Diabetes',
                explanation: 'Your body doesn\'t use insulin effectively (called insulin resistance). Your pancreas tries to make more insulin but can\'t keep up.',
                whatItMeans: 'This is the most common type of diabetes and often develops in adults. It\'s manageable with lifestyle changes and medication.',
                nextSteps: 'Focus on healthy eating, regular exercise, weight management, and take medications as prescribed.'
            },
            'type 1 diabetes': {
                simple: 'Type 1 Diabetes (Insulin-Dependent)',
                explanation: 'Your pancreas produces little or no insulin because your immune system destroyed the insulin-making cells.',
                whatItMeans: 'You\'ll need insulin injections or a pump for life. Usually diagnosed in children and young adults.',
                nextSteps: 'Monitor blood sugar frequently, count carbohydrates, take insulin as prescribed, and have regular check-ups.'
            },
            'cbc': {
                simple: 'Complete Blood Count',
                explanation: 'A blood test that measures different components of your blood: red blood cells (carry oxygen), white blood cells (fight infection), and platelets (help blood clot).',
                whatItMeans: 'This test helps doctors check your overall health and detect a wide range of disorders.',
                nextSteps: 'Your doctor will explain which numbers are out of range and what that means for you.'
            },
            'wbc': {
                simple: 'White Blood Cell Count',
                explanation: 'The number of white blood cells in your blood. These are your body\'s infection fighters.',
                whatItMeans: 'High count usually means your body is fighting an infection. Low count means your immune system may be weakened.',
                nextSteps: 'If elevated, your doctor will look for the source of infection. If low, you may need to be extra careful about exposure to germs.'
            },
            'elevated wbc': {
                simple: 'High White Blood Cell Count',
                explanation: 'You have more white blood cells than normal. Your body makes extra when fighting an infection or inflammation.',
                whatItMeans: 'Usually indicates an infection, but can also mean stress, inflammation, or other conditions.',
                nextSteps: 'Your doctor will investigate the cause and treat any underlying infection.'
            },
            'metformin': {
                simple: 'Diabetes Medication',
                explanation: 'A medication that helps lower blood sugar levels by making your body more sensitive to insulin and reducing sugar production in your liver.',
                whatItMeans: 'It\'s usually the first medication prescribed for type 2 diabetes. It doesn\'t cause weight gain.',
                nextSteps: 'Take with food to reduce stomach upset. Common side effects include diarrhea and nausea, which usually improve over time.'
            },
            'bid': {
                simple: 'Twice Daily',
                explanation: 'Latin abbreviation meaning "bis in die" - take this medication two times per day.',
                whatItMeans: 'Space doses about 12 hours apart (e.g., morning and evening).',
                nextSteps: 'Set reminders to take your medication at the same times each day.'
            },
            'gerd': {
                simple: 'Acid Reflux / Heartburn',
                explanation: 'Gastroesophageal Reflux Disease - stomach acid frequently flows back into your esophagus (the tube connecting your mouth and stomach).',
                whatItMeans: 'This causes heartburn and can damage your esophagus over time. It feels like burning in your chest.',
                nextSteps: 'Avoid trigger foods, don\'t lie down after eating, elevate head of bed, and take prescribed acid-reducing medications.'
            },
            'benign prostatic hyperplasia': {
                simple: 'Enlarged Prostate (Non-cancerous)',
                explanation: 'The prostate gland has grown larger. "Benign" means it\'s not cancer. This is very common as men age.',
                whatItMeans: 'Can make it harder to urinate, cause frequent urination especially at night, or weak urine stream.',
                nextSteps: 'Several treatment options available from lifestyle changes to medications to procedures. Discuss with your urologist.'
            },
            'bph': {
                simple: 'Enlarged Prostate (Non-cancerous)',
                explanation: 'Short for Benign Prostatic Hyperplasia. The prostate gland has grown larger, which is common as men age.',
                whatItMeans: 'Can affect urination, causing you to go more frequently or have difficulty starting/stopping.',
                nextSteps: 'Treatment options range from watchful waiting to medications to surgery, depending on severity.'
            },
            'edema': {
                simple: 'Swelling / Fluid Retention',
                explanation: 'Excess fluid is trapped in your body\'s tissues, usually in feet, ankles, and legs.',
                whatItMeans: 'Can be caused by standing/sitting too long, pregnancy, medications, or heart/kidney/liver problems.',
                nextSteps: 'Elevate affected areas, reduce salt intake, wear compression stockings if recommended, and address underlying cause.'
            },
            'arrhythmia': {
                simple: 'Irregular Heartbeat',
                explanation: 'Your heart beats in an abnormal pattern - too fast, too slow, or irregularly.',
                whatItMeans: 'Some are harmless, others need treatment. You might feel palpitations, dizziness, or chest discomfort.',
                nextSteps: 'Your doctor may order tests like an EKG or heart monitor. Treatment depends on type and severity.'
            },
            'copd': {
                simple: 'Chronic Lung Disease',
                explanation: 'Chronic Obstructive Pulmonary Disease - lung damage makes it hard to breathe. Usually caused by smoking.',
                whatItMeans: 'Airways are narrowed and damaged, making it harder to get air in and out. Symptoms worsen over time.',
                nextSteps: 'Stop smoking (most important!), use inhalers as prescribed, pulmonary rehabilitation, and oxygen therapy if needed.'
            },
            'asthma': {
                simple: 'Breathing Condition',
                explanation: 'Airways in your lungs become inflamed and narrow, making it hard to breathe.',
                whatItMeans: 'You may experience wheezing, shortness of breath, chest tightness, and coughing.',
                nextSteps: 'Identify and avoid triggers, use rescue inhaler for attacks, take controller medications daily if prescribed.'
            },
            'pneumonia': {
                simple: 'Lung Infection',
                explanation: 'Infection that inflames air sacs in one or both lungs, which may fill with fluid.',
                whatItMeans: 'Can cause coughing, fever, chills, and difficulty breathing. Can be serious, especially for older adults.',
                nextSteps: 'Usually treated with antibiotics. Get plenty of rest, stay hydrated, and finish all medication.'
            },
            'urinary tract infection': {
                simple: 'Bladder/Urinary Infection (UTI)',
                explanation: 'Infection in any part of your urinary system - kidneys, bladder, or urethra.',
                whatItMeans: 'Causes burning during urination, frequent urge to pee, and cloudy or bloody urine.',
                nextSteps: 'Treated with antibiotics. Drink plenty of water. Women get these more often than men.'
            },
            'uti': {
                simple: 'Bladder/Urinary Infection',
                explanation: 'Short for Urinary Tract Infection - bacteria gets into your urinary system.',
                whatItMeans: 'Common infection that causes painful urination and frequent bathroom trips.',
                nextSteps: 'Complete full course of antibiotics. Drink lots of water. Cranberry juice may help prevent future infections.'
            },
            'cholesterol': {
                simple: 'Fat in Your Blood',
                explanation: 'Waxy substance your body needs to build cells, but too much can clog your arteries.',
                whatItMeans: 'High cholesterol increases risk of heart disease and stroke. Often has no symptoms.',
                nextSteps: 'Get tested regularly. Lower through diet, exercise, and medication if needed.'
            },
            'mri': {
                simple: 'Magnetic Imaging Scan',
                explanation: 'Medical imaging test that uses magnets and radio waves to create detailed pictures of inside your body.',
                whatItMeans: 'Helps doctors see soft tissues like organs, ligaments, and the brain better than X-rays.',
                nextSteps: 'Remove all metal objects. Tell technician if you\'re claustrophobic or have any metal implants.'
            },
            'ct scan': {
                simple: 'CAT Scan / Detailed X-ray',
                explanation: 'Computed Tomography - combines multiple X-rays to create cross-sectional images of your body.',
                whatItMeans: 'Shows bones, organs, and tissues in great detail. Helps diagnose many conditions.',
                nextSteps: 'May need to fast beforehand. Contrast dye might be used to highlight certain areas.'
            },
            'x-ray': {
                simple: 'X-ray Image',
                explanation: 'Medical imaging that uses small amounts of radiation to see inside your body, especially bones.',
                whatItMeans: 'Quick and painless way to see broken bones, lung problems, or foreign objects.',
                nextSteps: 'Remove jewelry and metal objects. Stay still during the brief exposure.'
            }
        };

        let questions = [];
        let translationTimeout = null;

        // Load user-added terms from localStorage and add them to medicalTerms
        function loadUserTerms() {
            try {
                const userTerms = JSON.parse(localStorage.getItem('userMedicalTerms') || '{}');
                // Add all user terms to the medicalTerms object
                Object.assign(medicalTerms, userTerms);
                console.log('Loaded', Object.keys(userTerms).length, 'user-added terms from storage');
            } catch (error) {
                console.error('Error loading user terms:', error);
            }
        }

        // Call this on page load to restore user-added terms
        loadUserTerms();

        // Load questions from localStorage on page load
        function loadQuestions() {
            const savedQuestions = localStorage.getItem('doctorQuestions');
            if (savedQuestions) {
                questions = JSON.parse(savedQuestions);
                renderQuestions();
            }
        }

        // Save questions to localStorage
        function saveQuestions() {
            localStorage.setItem('doctorQuestions', JSON.stringify(questions));
        }

        // Handle input change with debounce for real-time translation
        function handleInputChange() {
            // Clear previous timeout
            if (translationTimeout) {
                clearTimeout(translationTimeout);
            }

            // Set new timeout to translate after 500ms of no typing
            translationTimeout = setTimeout(() => {
                translateText();
            }, 500);
        }

        // Main tab switching
        function switchMainTab(tabName, event) {
            // Update tab buttons
            document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
            event.currentTarget.classList.add('active');

            // Update page content
            document.querySelectorAll('.page-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabName + '-page').classList.add('active');
        }

        function fillExample(term) {
            document.getElementById('medical-input').value = term;
            translateText(); // Immediately translate when example is clicked
        }

        function translateText() {
            const input = document.getElementById('medical-input').value.trim();
            
            const resultsContainer = document.getElementById('results-container');
            
            // If input is empty, show empty state
            if (!input) {
                resultsContainer.innerHTML = `
                    <div class="empty-state">
                        <div class="icon">📝</div>
                        <p>Translation will appear here</p>
                    </div>
                `;
                return;
            }

            const inputLower = input.toLowerCase();
            resultsContainer.innerHTML = '';
            
            let foundTerms = [];
            let translatedText = input;

            // Find all matching medical terms in the input (whole words only)
            for (const [term, data] of Object.entries(medicalTerms)) {
                // Use word boundary regex to match whole words only
                const regex = new RegExp('\\b' + term + '\\b', 'i');
                if (regex.test(inputLower)) {
                    const position = inputLower.search(regex);
                    foundTerms.push({ term, data, position });
                }
            }

            // Sort by position in text
            foundTerms.sort((a, b) => a.position - b.position);

            if (foundTerms.length > 0) {
                // Show paragraph translation
                const translationDiv = document.createElement('div');
                translationDiv.className = 'translation-result';
                
                // Create translated version with highlighted terms
                let highlightedText = input;
                foundTerms.forEach(({ term, data }) => {
                    const regex = new RegExp('\\b(' + term + ')\\b', 'gi');
                    highlightedText = highlightedText.replace(regex, `<strong style="color: #EBAAC6;">$1</strong>`);
                });

                // Build plain English explanation
                let plainEnglish = input;
                foundTerms.forEach(({ term, data }) => {
                    const regex = new RegExp('\\b' + term + '\\b', 'gi');
                    plainEnglish = plainEnglish.replace(regex, data.simple);
                });

                translationDiv.innerHTML = `
                    <div class="original-term">Original Text:</div>
                    <div class="simple-explanation" style="margin-bottom: 15px;">
                        ${highlightedText}
                    </div>
                    <div class="original-term" style="margin-top: 15px;">Plain English:</div>
                    <div class="simple-explanation">
                        ${plainEnglish}
                    </div>
                `;
                
                resultsContainer.appendChild(translationDiv);

                // Show individual term explanations
                foundTerms.forEach(({ term, data }) => {
                    addTranslation(term, data);
                });

            } else {
                // No matches found
                resultsContainer.innerHTML = `
                    <div class="translation-result">
                        <div class="simple-explanation">
                            <strong>No exact matches found</strong><br>
                            We didn't find exact matches for those terms in our database yet, but here's what you can do:
                        </div>
                        <div class="additional-info">
                            <strong>Next Steps:</strong><br>
                            • Try breaking down the text into individual medical terms<br>
                            • Click on the example chips to see how translations work<br>
                            • Add this term to your questions list in the "Questions for Doctor" tab<br>
                            • Search reliable sources like MedlinePlus.gov or Mayo Clinic<br><br>
                            <strong>Tip:</strong> Write down the term and ask your doctor to explain it in your next appointment. They're there to help you understand!
                        </div>
                    </div>
                `;
            }
        }

        function addTranslation(term, data) {
            const resultsContainer = document.getElementById('results-container');
            
            // Add user-added badge if applicable
            const userBadge = data.userAdded ? ' <span style="background: #829F71; color: white; padding: 3px 10px; border-radius: 12px; font-size: 0.8em; font-weight: 600;">Your Addition 💚</span>' : '';
            
            const translationDiv = document.createElement('div');
            translationDiv.className = 'translation-result';
            translationDiv.innerHTML = `
                <div class="original-term">Medical Term: "${term}"${userBadge}</div>
                <div class="simple-explanation">
                    <strong>${data.simple}</strong><br>
                    ${data.explanation}
                </div>
                <div class="additional-info">
                    <strong>What this means for you:</strong><br>
                    ${data.whatItMeans}
                    <br><br>
                    <strong>Next steps:</strong><br>
                    ${data.nextSteps}
                </div>
            `;
            
            resultsContainer.appendChild(translationDiv);
        }

        function addQuestion() {
            const input = document.getElementById('question-input');
            const question = input.value.trim();

            if (!question) {
                alert('Please enter a question');
                return;
            }

            questions.push(question);
            input.value = '';
            
            saveQuestions(); // Save to localStorage
            renderQuestions();
        }

        function renderQuestions() {
            const questionsList = document.getElementById('questions-list');
            const exportBtn = document.getElementById('export-btn');
            const questionCount = document.getElementById('question-count');

            questionCount.textContent = questions.length;

            if (questions.length === 0) {
                questionsList.innerHTML = `
                    <div class="empty-state">
                        <div class="icon">📝</div>
                        <p>No questions added yet</p>
                    </div>
                `;
                exportBtn.classList.add('hidden');
                return;
            }

            questionsList.innerHTML = '';
            exportBtn.classList.remove('hidden');

            questions.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question-item';
                questionDiv.innerHTML = `
                    <div class="question-text">${index + 1}. ${question}</div>
                    <button class="delete-btn" onclick="deleteQuestion(${index})">Delete</button>
                `;
                questionsList.appendChild(questionDiv);
            });
        }

        function deleteQuestion(index) {
            questions.splice(index, 1);
            saveQuestions(); // Save to localStorage
            renderQuestions();
        }

        function exportQuestions() {
            if (questions.length === 0) return;

            let text = 'Questions for My Doctor\n';
            text += '═══════════════════════\n\n';
            questions.forEach((question, index) => {
                text += `${index + 1}. ${question}\n\n`;
            });
            text += '\nPrepared with GloryMed - Health Literacy Translator';

            // Create blob and download
            const blob = new Blob([text], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'doctor-questions.txt';
            a.click();
            window.URL.revokeObjectURL(url);
        }

        // Initialize
        loadQuestions(); // Load saved questions from localStorage

        // Feedback Modal Functions
        function openFeedbackModal() {
            document.getElementById('feedback-modal').classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeFeedbackModal(event) {
            // Close if clicking overlay or close button, but not if clicking inside modal
            if (!event || event.target.classList.contains('modal-overlay') || event.target.classList.contains('close-modal')) {
                document.getElementById('feedback-modal').classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
                // Reset form and hide success message
                document.getElementById('feedback-success').classList.remove('active');
                setTimeout(() => {
                    document.querySelector('.feedback-form').reset();
                }, 300);
            }
        }

        function submitFeedback(event) {
            event.preventDefault();
            
            const name = document.getElementById('feedback-name').value;
            const email = document.getElementById('feedback-email').value;
            const message = document.getElementById('feedback-message').value;

            // In a real application, you would send this to a server
            // For now, we'll just save it to localStorage for demonstration
            const feedback = {
                name: name || 'Anonymous',
                email: email || 'Not provided',
                message: message,
                timestamp: new Date().toISOString()
            };

            // Get existing feedback
            let allFeedback = JSON.parse(localStorage.getItem('userFeedback') || '[]');
            allFeedback.push(feedback);
            localStorage.setItem('userFeedback', JSON.stringify(allFeedback));

            // Show success message
            document.getElementById('feedback-success').classList.add('active');
            document.querySelector('.feedback-form').reset();

            // Close modal after 2 seconds
            setTimeout(() => {
                closeFeedbackModal();
            }, 2000);
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeFeedbackModal();
            }
        });

        // Submit new term to word bank
        function submitNewTerm() {
            const termInput = document.getElementById('new-term');
            const definitionInput = document.getElementById('new-term-definition');
            const explanationInput = document.getElementById('new-term-explanation');
            const successMsg = document.getElementById('submit-success');
            
            const term = termInput.value.trim().toLowerCase();
            const definition = definitionInput.value.trim();
            const explanation = explanationInput.value.trim();
            
            if (!term) {
                alert('Please enter a medical term');
                return;
            }
            
            if (!definition) {
                alert('Please enter a plain English definition');
                return;
            }
            
            // Check if term already exists in the word bank
            if (medicalTerms[term]) {
                alert('This term is already in our word bank! Try translating it above.');
                return;
            }
            
            // Create the new term entry
            const newTermData = {
                simple: definition,
                explanation: explanation || definition,
                whatItMeans: explanation || definition,
                nextSteps: 'User-contributed term. Consult your healthcare provider for specific medical advice.',
                userAdded: true,
                dateAdded: new Date().toISOString()
            };
            
            try {
                // Add the term to the active medical terms database immediately
                medicalTerms[term] = newTermData;
                
                // Load existing user terms from localStorage
                const userTerms = JSON.parse(localStorage.getItem('userMedicalTerms') || '{}');
                
                // Add new term to user terms
                userTerms[term] = newTermData;
                
                // Save back to localStorage
                localStorage.setItem('userMedicalTerms', JSON.stringify(userTerms));
                
                // Verify it was saved correctly
                const verification = JSON.parse(localStorage.getItem('userMedicalTerms') || '{}');
                if (!verification[term]) {
                    throw new Error('Failed to save term to storage');
                }
                
                console.log('Successfully added and saved term:', term);
                
                // Show success message
                successMsg.style.display = 'block';
                
                // Clear the form
                termInput.value = '';
                definitionInput.value = '';
                explanationInput.value = '';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
                
            } catch (error) {
                console.error('Error saving term:', error);
                alert('There was an error saving the term. Please try again.');
            }
        }
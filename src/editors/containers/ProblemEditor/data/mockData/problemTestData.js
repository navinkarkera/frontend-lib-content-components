export const checklistWithFeebackHints = {
    problem: {
      rawOLX: '<problem>\n    <choiceresponse>\n        <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n        <label>Add the question text, or prompt, here. This text is required.</label>\n        <description>You can add an optional tip or note related to the prompt like this.</description>\n        <checkboxgroup>\n            <choice correct="true">a correct answer\n                <choicehint selected="true">You can specify optional feedback that appears after the learner selects and submits this answer.</choicehint>\n                <choicehint selected="false">You can specify optional feedback that appears after the learner clears and submits this answer.</choicehint>\n            </choice>\n            <choice correct="false">an incorrect answer\n            </choice>\n            <choice correct="false">an incorrect answer\n                <choicehint selected="true">You can specify optional feedback for none, all, or a subset of the answers.</choicehint>\n                <choicehint selected="false">You can specify optional feedback for selected answers, cleared answers, or both.</choicehint>\n            </choice>\n            <choice correct="true">a correct answer\n            </choice>\n            <compoundhint value="A B D">You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted.</compoundhint>\n            <compoundhint value="A B C D">You can specify optional feedback for one, several, or all answer combinations.</compoundhint>\n        </checkboxgroup>\n    </choiceresponse>\n\n    <demandhint>\n        <hint>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</hint>\n        <hint>If you add more than one hint, a different hint appears each time learners select the hint button.</hint>\n    </demandhint>\n</problem>\n',
      problemType: 'MULTISELECT',
      question: 'You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.\n\n<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this.</p>\n\n',
      answers: [
        {
          id: 0,
          title: 'a correct answer',
          correct: true,
          selectedFeedback: ' You can specify optional feedback that appears after the learner selects and submits this answer.',
          unselectedFeedback: 'You can specify optional feedback that appears after the learner clears and submits this answer.'
        },
        {
          id: 1,
          title: 'an incorrect answer',
          correct: false,
          selectedFeedback: '',
          unselectedFeedback: ''
        },
        {
          id: 2,
          title: 'an incorrect answer',
          correct: false,
          selectedFeedback: ' You can specify optional feedback for none, all, or a subset of the answers.',
          unselectedFeedback: 'You can specify optional feedback for selected answers, cleared answers, or both.'
        },
        {
          id: 3,
          title: 'a correct answer',
          correct: true,
          selectedFeedback: '',
          unselectedFeedback: ''
        }
      ],
      groupFeedbackList: [
        {
          id: 3,
          answers: [
            0,
            1,
            3
          ],
          feedback: 'You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted.'
        },
        {
          id: 4,
          answers: [
            0,
            1,
            2,
            3
          ],
          feedback: 'You can specify optional feedback for one, several, or all answer combinations.'
        }
      ],
      hints: [
        {
          id: 14,
          value: 'You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.'
        },
        {
          id: 15,
          value: 'If you add more than one hint, a different hint appears each time learners select the hint button.'
        }
      ],
      settings: {
        scoring: {
          advanced: false,
          scoring: {
            wieght: 0,
            attempts: {
              unlimited: true,
              number: 0
            }
          }
        },
        randomization: '',
        timeBetween: 0,
        MatLabApiKey: '',
        showAnswer: {
          on: '',
          afterAtempts: 1
        },
        showResetButton: false
      }
    },
    markdown: `You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.

>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this.<<
[x] a correct answer{{selected:  You can specify optional feedback that appears after the learner selects and submits this answer.},{unselected: You can specify optional feedback that appears after the learner clears and submits this answer.}}
[ ] an incorrect answer
[ ] an incorrect answer{{selected:  You can specify optional feedback for none, all, or a subset of the answers.},{unselected: You can specify optional feedback for selected answers, cleared answers, or both.}}
[x] a correct answer
||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||
{{ (( A B D )) You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted. }}
{{ (( A B C D )) You can specify optional feedback for one, several, or all answer combinations. }}
`
};

export const dropdownWithFeedbackHints = {
    problem: {
        rawOLX: '<problem>\n    <optionresponse>\n        <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n        <label>Add the question text, or prompt, here. This text is required.</label>\n        <description>You can add an optional tip or note related to the prompt like this. </description>\n        <optioninput>\n            <option correct="False">an incorrect answer <optionhint>You can specify optional feedback like this, which appears after this answer is submitted.</optionhint></option>\n            <option correct="True">the correct answer</option>\n            <option correct="False">an incorrect answer <optionhint>You can specify optional feedback for none, a subset, or all of the answers.</optionhint></option>\n        </optioninput>\n    </optionresponse>\n    <demandhint>\n      <hint>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</hint>\n      <hint>If you add more than one hint, a different hint appears each time learners select the hint button.</hint>\n    </demandhint>\n</problem>\n',
        problemType: 'DROPDOWN',
        question: 'You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown with hints and feedback problems. Edit this component to replace this template with your own assessment.\n<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. </p>\n',
        answers: [
        {
            id: 0,
            title: 'an incorrect answer',
            correct: false,
            feedback: 'You can specify optional feedback like this, which appears after this answer is submitted.'
        },
        {
            id: 1,
            title: 'the correct answer',
            correct: true,
            feedback: ''
        },
        {
            id: 2,
            title: 'an incorrect answer',
            correct: false,
            feedback: 'You can specify optional feedback for none, a subset, or all of the answers.'
        }
        ],
        groupFeedbackList: [],
        hints: [
        {
            id: 8,
            value: 'You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.'
        },
        {
            id: 9,
            value: 'If you add more than one hint, a different hint appears each time learners select the hint button.'
        }
        ],
    },
    markdown: `You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown with hints and feedback problems. Edit this component to replace this template with your own assessment.
>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<
[[ an incorrect answer {{You can specify optional feedback like this, which appears after this answer is submitted.}} (the correct answer) an incorrect answer {{You can specify optional feedback for none, a subset, or all of the answers.}}]]
||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||
`
}
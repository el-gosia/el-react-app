export const mockTestRegister = [
  {
    id: '1',
    date: '01-01-2019',
    issues: [
      { id: '1-1', name: 'Page changes', open: false },
      { id: '1-2', name: 'Review of last issues', open: false },
    ],
  },
  {
    id: '2',
    date: '02-01-2019',
    issues: [
      { id: '2-1', name: 'Visual UI Update Review', open: true },
      { id: '2-2', name: 'Sidebar changes', open: true },
    ],
  },
];

export const onIssueClick = jest.fn().mockName('onIssueClick');

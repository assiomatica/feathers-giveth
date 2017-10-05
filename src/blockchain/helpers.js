
export const milestoneStatus = (val) => {
  switch (val) {
    case '0':
      return 'InProgress';
    case '1':
      return 'NeedsReview';
    case '2':
      return 'Completed';
    case '3':
      return 'Canceled';
    default:
      return 'Unknown';
  }
};

export const campaignStatus = (val) => {
  switch (val) {
    case '0':
      return 'Active';
    case '1':
      return 'Canceled';
    default:
      return 'Unknown';
  }
};
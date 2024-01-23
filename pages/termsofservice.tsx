// Import necessary components and types
import type { NextPage } from 'next';
import {Layout} from '../components/navbar/layout';
import { Box } from '../components/styles/box'; // Box component for styling

const TermsOfService: NextPage = () => {
  // ToS content, ideally loaded from a file or database for maintainability
  const termsOfServiceContent: string = `
    Your Terms of Service Text Here...

    1. Introduction
    [Content]

    2. User Obligations
    [Content]

    3. Copyright and Trademarks
    [Content]

    4. Limitation of Liability
    [Content]

    5. Privacy Policy
    [Content]

    ... and so on.
  `;

  return (
    <Layout>
      {/* You can include a navigation component here if needed */}
      <Box as="main" className="termsOfService">
        <h1>Terms of Service</h1>
        <p>{termsOfServiceContent}</p>
      </Box>
    </Layout>
  );
};

export default TermsOfService;

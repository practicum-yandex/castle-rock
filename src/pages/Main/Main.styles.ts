import styled from "styled-components";

import ShareTitle from "@/share/Title";

export const Title = styled(ShareTitle)`
	${({ theme }) => `
		margin-bottom: ${theme.spacing(2)};
	`}
`;

export const Block = styled.div`
	${({ theme }) => `
    max-width: 800px;

    :not(:last-child) {
      margin-bottom: ${theme.spacing(2)};
    }

    li {
      margin-left: ${theme.spacing(3)};
    }

    p:not(:last-child) {
      margin-bottom: ${theme.spacing(1)};
    }
	`}
`;

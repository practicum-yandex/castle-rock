import styled from "styled-components";

import CustomTitle from "@/share/Title";

export const Title = styled(CustomTitle)`
	${({ theme }) => `
    margin-bottom: ${theme.spacing(2)};
  `}
`;

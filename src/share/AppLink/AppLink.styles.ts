import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
	${({ theme }) => `
        font-size: 11px;
        line-height: 11px;
        color: ${theme.colors.primary()};
        transition: linear ${theme.transition};

        :hover {
            color: ${theme.colors.primary(0.9)};
        }
	`}
`;

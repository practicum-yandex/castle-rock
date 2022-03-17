import styled from "styled-components";
import CustomTitle from "@/share/Title";
import CustomThemeSwither from "@/components/ThemeSwitcher";

export const Title = styled(CustomTitle)`
	${({ theme }) => `
    margin-bottom: ${theme.spacing(2)};
  `}
`;

export const Nav = styled.nav`
	${({ theme }) => `
		margin-bottom: ${theme.spacing(2)};

		> *:not(:last-child) {
			margin-right: ${theme.spacing()};
		}
	`}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ThemeSwither = styled(CustomThemeSwither)`
	${({ theme }) => `
		margin-right: ${theme.spacing(2)};
	`}
`;

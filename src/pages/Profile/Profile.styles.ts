import styled from "styled-components";
import FileLoaderWrapper from "@/components/FileLoaderWrapper";

export const ProfileContent = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const FLoaderWrapper = styled(FileLoaderWrapper)`
	${({ theme }) => `
        margin-bottom: ${theme.spacing(2)};
    `}
`;

export const Wrapper = styled.div`
	${({ theme }) => `
        width: 40%;
        max-width: 600px;
        margin: 50px 0;

        > * {
            border-bottom: 1px solid ${theme.border};

            :last-child {
                border-color: 1px solid transperent;
            }
        }

        :last-of-type {
            margin: 0;
        }
    `}
`;

export const Field = styled.p`
	${({ theme }) => `
        width: 100%;
        padding: 10px 0;
        font-weight: 500;
        font-size: 13px;
        line-height: 13px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > span {
            color: ${theme.colors.secondary()};
        }
    `}
`;

export const CustomButton = styled.p`
	${({ theme }) => `
        width: 100%;
        padding: 10px 0;
        font-weight: bold;
        font-size: 13px;
        line-height: 13px;
        cursor: pointer;
        color: ${theme.colors.primary()};
    `}
`;

export const Overlay = styled.div`
	${({ theme }) => `
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        background-color: ${theme.border};
    `}
`;

import styled from 'styled-components';

export const SwitchContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props && props.theme && props.theme.color};

  .label-text {
    margin-left: 16px;
  }

  .toggle {
    isolation: isolate;
    position: relative;
    background-color: ${props => props && props.theme && props.theme.color};
    height: 30px;
    width: 60px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: -8px -4px 8px 0px ${props => props && props.theme && props.theme.primaryShadowColor}, 8px 4px 12px 0px ${props => props && props.theme && props.theme.secondaryShadowColor},
      4px 4px 4px 0px ${props => props && props.theme && props.theme.secondaryShadowColor} inset, -4px -4px 4px 0px ${props => props && props.theme && props.theme.primaryShadowColor} inset;
  }

  .toggle-state {
    display: none;
  }

  .indicator {
    height: 100%;
    width: 200%;
    background: ${props => props && props.theme && props.theme.color};
    border-radius: 15px;
    transform: translate3d(-75%, 0, 0);
    transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    box-shadow: -8px -4px 8px 0px ${props => props && props.theme && props.theme.primaryShadowColor}, 8px 4px 12px 0px ${props => props && props.theme && props.theme.secondaryShadowColor};
  }

  .toggle-state:checked ~ .indicator {
    transform: translate3d(25%, 0, 0);
  }
`;

FROM node:16-alpine

COPY sample_app sample_app
WORKDIR sample_app
RUN yarn install & yarn build
CMD ['yarn','run','start']

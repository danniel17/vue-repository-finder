import { should } from 'chai';
import store from '../../../src/store/store';

should();

describe('Testes Vuex store', () => {
    it('is configured correctly', () => {
        expect(true).to.equal(true);
    });
    it('Busca um Repositório', () => {
        // expect(store.state.user).to.be.null;
        actions.getRepo('facebook/360-Capture-SDK');
        expect(store.state.repo.name).to.be('360-Capture-SDK');
    });
    it('Busca de Usuario', () => {
        // expect(store.state.user).to.be.null;
        // store.actions.getUser('microsoft');
        // expect(user.login).to.equal('microsoft');
    })
});
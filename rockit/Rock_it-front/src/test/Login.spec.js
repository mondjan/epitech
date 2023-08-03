import NavBarComponent from '../path/to/NavBarComponent';

describe('NavBarComponent', () => {
  test('logout function clears localStorage and updates isConnected state', async () => {
    // Préparation
    const wrapper = mount(NavBarComponent);
    localStorage.setItem('exampleKey', 'exampleValue');
    wrapper.vm.isConnected = true;

    // Exécution
    await wrapper.find('.conditionalRendered .dropdown ul li a').trigger('click');

    // Assertions
    expect(localStorage.clear).toHaveBeenCalled();
    expect(wrapper.vm.isConnected).toBe(false);
  });
});
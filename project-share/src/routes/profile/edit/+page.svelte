<!-- EditProfile.svelte -->
<script>
    import { authStore } from '../../../stores/authStore';
    import { doc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    import { Row, Col, Button, Input } from 'spaper';
  
    let displayName = $authStore.displayName;
    let email = $authStore.email;
  
    async function updateProfile() {
      try {
        const userRef = doc(db, 'users', $authStore.userId);
        await updateDoc(userRef, {
          displayName: displayName,
          email: email,
        });
        // Update the authStore with the new values
        authStore.update((store) => ({
          ...store,
          displayName: displayName,
          email: email,
        }));
        // Show success message or redirect to profile page
        console.log('Profile updated successfully');
      } catch (error) {
        console.error('Error updating profile:', error);
        // Show error message
      }
    }
  </script>
  
  <div class="container">
    <Row>
      <Col>
        <h1>Edit Profile</h1>
      </Col>
    </Row>
  
    <Row>
      <Col>
        <form>
          <Input
            label="Display Name"
            type="text"
            bind:value={displayName}
            required
          />
          <Input
            label="Email"
            type="email"
            bind:value={email}
            required
            disabled
          />
          <Button on:click={updateProfile}>Save Changes</Button>
        </form>
      </Col>
    </Row>
  </div>